import React from 'react'
import { fetch } from 'isomorphic-fetch'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const Frame = () => (
  <Card>
    <Image src='http://i.imgur.com/v0yij.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Daniel Taylor</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Picture of a bird I saw
      </Card.Description>
    </Card.Content>
  </Card>
)

Frame.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Frame