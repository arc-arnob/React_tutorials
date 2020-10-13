import React from 'react'
import ReactDOM from 'react-dom' 
import faker from 'faker'
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    name="Arnob"
                    timeago="2 min ago"
                    content="This is good post"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail 
                    name="Arnob"
                    timeago="2 min ago"
                    content="This is good post"
                    avatar = {faker.image.avatar()}
                />
                <CommentDetail 
                    name="Arnob"
                    timeago="2 min ago"
                    content="This is good post"
                    avatar = {faker.image.avatar()}
                />
                <CommentDetail 
                    name="Arnob"
                    timeago="2 min ago"
                    content="This is good post"
                    avatar = {faker.image.avatar()}
                />
            
        </div> 
    );
}
ReactDOM.render(<App />, document.querySelector("#root"));
