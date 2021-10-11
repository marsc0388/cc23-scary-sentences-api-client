import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo'
import { useState, useEffect } from "react";

const getStoriesQuery = gql `
query getMultiple {
  Stories {
    id
    author
    body
  }
}
`

function StoryList(props) {

    const displayStories = () => {
        var data = props.data;
        // console.log(data.Stories);
        // return (<h2>Loading</h2>)
        if(data.loading) {
            return (<div>Loading stories...</div>);
        }
        else {
            return data.Stories.map((story, index) => {
                return (
                    <li className="story" key={index}>{story.body}</li>
                );
            });
        }
    };

    return (
      <div>
        <ul id="story-list">
        {displayStories()}
        </ul>
      </div>
    );
  }
  
  export default graphql(getStoriesQuery)(StoryList);