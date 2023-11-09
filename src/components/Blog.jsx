import React from "react";
import Grid from "@mui/material/Grid";
import "../styles/Blog.css";
import Container from "@mui/material/Container";
import canintelligence from "../images/canintelligence.jpg";
import childintelligence from "../images/childintelligence.jpg";
import howismemory from "../images/howismemory.jpg";
import inheritanceintelligence from "../images/inheritanceintelligence.jpg";
import isIQtestreal from "../images/isIQtestreal.jpg";
import smartandfact from "../images/smartandfact.jpg";
import smartpeople from "../images/smartpeople.png";
import testingsmart from "../images/testingsmart.jpg";
import whatissmart from "../images/whatissmart.jpg";
import BlogCard from "./BlogCard";

function Blog() {
  // console.log("Blog");
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} className="blogGrid">
          <Grid item xs={12} md={6} lg={6} className="gridClass">
            <BlogCard
              image={whatissmart}
              title="What is intelligence?"
              subtitle="Is intelligence our capacity to use our brain?"
              description="Our intelligence allows us to keep up with environmental changes and provide functional solutions to vital problems. In other words, it increases our ability to live. Intelligence; It can be defined as a person's general cognitive problem-solving ability. The brain's capacity to reason through relationships and analogies, the ability to calculate and come to quick conclusions..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={smartpeople}
              title="15 Common Traits of Intelligent People"
              subtitle="How many of these characteristics do you have?"
              description="Studies have shown that people with high IQ levels have some common characteristics. Although these characteristics vary slightly from person to person, they are mostly common in intelligent people. In general, it can be concluded that individuals with these characteristics are more intelligent than other members of the society."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={smartandfact}
              title="Factors Affecting Our Intelligence"
              subtitle="Contributions to the formation of our intelligence"
              description="In order to measure intelligence accurately, it is necessary to analyze and explain it well. Scientists are conducting extensive studies on this subject. Research shows that our intelligence is affected by many factors
              .Our genes One of the factors that affects our intelligence is the..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={testingsmart}
              title="Intelligence Tests"
              subtitle="The emergence of tests"
              description="Intelligence tests emerged to measure individuals' cognitive abilities and compare them with other individuals. This comparison and level determination study regarding intelligence is encountered for the first time in history in a kind of talent test used by Chinese rulers to recruit servants in the 2200s BC."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={canintelligence}
              title="Can Intelligence Be Improved?"
              subtitle="Scientists say it can be improved"
              description="Scientists agree that intelligence can be improved. Much of our current intelligence is inherited. Of course, the impact of environmental factors cannot be ignored. However, the abilities we acquire through environmental influences develop rapidly until we are approximately 16 years old."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={childintelligence}
              title="Intelligence Development in Children"
              subtitle="The importance of the first three years"
              description="IQ (intelligence quotient) in children is one of the hot topics of recent times. All parents want their children to be smart. Smart child means many different things to parents. While some evaluate this according to exam results, others consider their children's multiple interests such as music or art as a sign of intelligence."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={howismemory}
              title="How Can We Strengthen Our Memory?"
              subtitle="Does repetition help?"
              description="The human brain has incredible adaptability. Contrary to popular belief, this ability does not decline as we get older, but rather develops. Thanks to this feature known as neuroplasticity, our brain, when exposed to sufficient stimulation, adapts to new situations by constantly establishing new connections and destroying unnecessary connections. This ability applies to memory as well as learning."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={isIQtestreal}
              title="Validity and Reliability of IQ Tests"
              subtitle="How are the results calculated?"
              description="A valid test must be able to actually measure the subject it aims to measure. Research shows that there is a clear correlation between the score obtained as a result of IQ tests and a person's ability to learn and relate. Likewise, there is a strong relationship between school success and IQ score. It is a fact that individuals with high IQ scores are more successful in school and work life..."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <BlogCard
              image={inheritanceintelligence}
              title="Is Intelligence Hereditary?"
              subtitle="What do scientists say?"
              description="It is a generally accepted approach that intelligence is a hereditary trait, that is, transferred from one generation to another through inheritance. Intelligence is the legacy of our ancestors who were able to find constructive solutions to the problems they encountered throughout their lives and therefore survived. Studies conducted on the volume of gray matter in our brain..."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Blog;
