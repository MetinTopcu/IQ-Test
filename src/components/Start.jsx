import React, { useEffect, useRef, useState } from "react";

import { useContext } from "react"; //1.adım eski
import StartContext from "../Context/Context"; //2.adım eski
import axios from "axios";
import "../styles/Start.css";
import { Link } from "react-router-dom";


import { random } from 'lodash';

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ButtonGroup,
  DialogTitle,
  FormLabel,
  FormControl,
  Input,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Grid,
  Box,
  Container,
} from "@mui/material";

import { useFormik, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import Finish from "./Finish";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

let ii = 0;
let ll = 0;
let eybisidi = 0;
let numberButton = 0;
let acayip = "";
let checkAnswer = false;
function Start() {
  // console.log("Start");
  const { navbarFalse, navbarTrue} = useContext(StartContext); //3.adım eski
  const [openDia, setOpenDia] = useState(true);
  const [startQuiz, setStartQuiz] = useState(false);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [randomABCD, setRandomABCD] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [differentArray, setDifferentArray] = useState([]);
  const [noFinish, setNoFinish] = useState(true);
  const renderCount = useRef(-1);
  const renderCountll = useRef(-1);

  const fetchTasks = async (e) => {

    if(differentArray.length === 79){
      setNoFinish(false);
    }

    const deger = e.currentTarget.value;
    if(eybisidi === 3){
      renderCount.current = renderCount.current -1;
      renderCountll.current = renderCountll.current -1;
    }
    else if(eybisidi === 2){
      renderCount.current = renderCount.current -2;
      renderCountll.current = renderCountll.current -2;
    }
    // renderCount.current = renderCount.current -1;
    setStartQuiz(false);
    ii = 0;
    ll = 0;
    

    for(let cc = 0; cc<=1300; cc++){
      const randomNum = random(1, 79);
      if(differentArray.includes(randomNum)){

      }
      else{
        setDifferentArray((prevState) =>[...prevState,randomNum]);

        // console.log("Dif randomimm",differentArray);
        // console.log("Direk randomim",randomNum);
        const randomasil = randomNum-1;
    
        // console.log("randomum",randomNum);
        setOpenDia(false);
        
        const response = await axios.get("https://localhost:7170/api/Questions");
        // console.log(response.data.data[randomasil].questions);
        setQuestion(response.data.data[randomasil].questions);

        if(numberButton >= 1){
          checkAnswer = deger == acayip;
          // console.log("deger",deger);
          // console.log("wt",acayip);
          if(checkAnswer){
          // console.log("correct");
        }
          else{
        //  console.log("wrong");
       }
        }
        
    
        const correctResponse = await axios.get("https://localhost:7170/api/CorrectAnswer");
        // console.log(correctResponse.data.data[randomasil].correctAns);
        setCorrectAnswer(correctResponse.data.data[randomasil].correctAns);

        acayip = correctResponse.data.data[randomasil].correctAns;
        
        
        eybisidi = 0;
        const wrongResponse = await axios.get("https://localhost:7170/api/WrongAnswer");
        for(let i = 0; i<305; i++){
          if(wrongResponse.data.data[i].questionId === randomNum){
            // console.log("wrong Answerim Gel buraya",wrongResponse.data.data[i].wrongAns);
            eybisidi++;
            setWrongAnswers((prevState) =>[...prevState,wrongResponse.data.data[i].wrongAns]);
          }
        }
        break;
      }
    }
    numberButton++;
    const fetchRandomABCD = random(0,eybisidi);
    setRandomABCD(fetchRandomABCD);
    setStartQuiz(true);
  };

  useEffect(() => {
    navbarFalse();

    return () => navbarTrue(); //component unmount edildiği an return anıdır
  }, []);

  function metocan(){
    if(randomABCD === ii){
      ii++;
      // console.log("ay",randomABCD);
      // console.log("ii değerim",ii);
      return correctAnswer;
    }
    else{
      ii++;
      // console.log("ay",randomABCD);
      // console.log("day",ii);
      renderCount.current = renderCount.current +1;
      return wrongAnswers[renderCount.current];
    }

  }
    function metocan1(){
    if(randomABCD === ll){
      ll++;
      // console.log("ay",randomABCD);
      // console.log("ii değerim",ii);
      return correctAnswer;
    }
    else{
      ll++;
      // console.log("ay",randomABCD);
      // console.log("day",ii);
      renderCountll.current = renderCountll.current +1;
      return wrongAnswers[renderCountll.current];
    }
  }

  return (
    <div>
      <Dialog open={openDia}>
        <DialogTitle style={{ margin: "auto" }}>
          Real IQ Test - Online IQ Test
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: "15px" }}>
            This test consists of 100 multiple choice questions that are all
            abstract in nature. Your answers will be ranked against other scores
            gathered in a carefully conducted baseline study. This test has a 50
            minute time limit, or 30 seconds per question. IQ test for those
            between 5 and 100 years old
          </DialogContentText>
          <DialogActions style={{ flexDirection: "column" }}>
            <Formik
              initialValues={{ age: "" }}
              onSubmit={onSubmit}
              validationSchema={advancedSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <CustomInput
                    name="age"
                    type="number"
                    placeholder="Your Age(optional)"
                  />
                  {/* <Input placeholder="Your Age(required)" /> */}
                  <Button
                    style={{ marginTop: "15px" }}
                    onClick={fetchTasks}
                    type="submit"
                    disabled={isSubmitting}
                    value="gg"
                  >
                    Start The Test
                  </Button>
                </Form>
              )}
            </Formik>
          </DialogActions>
        </DialogContent>
      </Dialog>
      {noFinish ? 
      startQuiz && (
        <div className="quizClass">
          <div className="quizQuestion">
            <label>Time</label>
            <div>
              <h2>Question {differentArray.length}/79</h2>
            </div>
            <div>{question}</div>
          </div>
          <div className="quizAnswer">
            <Container maxWidth="lg">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={14} md={10} lg={8}>
                  <Button variant="contained" disableElevation onClick={fetchTasks} value={metocan1()}>
                  {metocan()}
                  </Button>
                </Grid>
                <Grid item xs={14} md={10} lg={8}>
                  <Button variant="contained" disableElevation onClick={fetchTasks} value={metocan1()}>
                  {metocan()}
                  </Button>
                </Grid>
                <Grid item xs={14} md={10} lg={8}>
                  <Button variant="contained" disableElevation  onClick={fetchTasks} value={metocan1()}>
                  {metocan()}
                  </Button>
                </Grid>
                <Grid item xs={14} md={10} lg={8}>
                  <Button variant="contained" disableElevation onClick={fetchTasks} value={metocan1()}>
                  {metocan()}
                  </Button>
                </Grid>
                <Grid item xs={14} md={10} lg={8}>
                  <Button variant="contained" disableElevation onClick={fetchTasks} value={metocan1()}>
                  {metocan()}
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      ): <Link to='/finish' className="btnFinish"> <button>Finish</button> </Link>}
      
    </div>
  );
}

export default Start;
