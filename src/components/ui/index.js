import React from "react";
import "./index.css";
import GithubEvent from "../GithubEvent";
import CommitList from "../CommitList";


export default function (props) {
    const { name, commits, message, time, branch, repo } = props;
    const title = (
        <React.Fragment><strong>{name}</strong> merged <strong>{commits.length}</strong> commits to <strong>{repo}/{branch}</strong></React.Fragment>
    )

    return (
        <GithubEvent title={title} message={message} time={time}>
            <CommitList commits={commits} />
        </GithubEvent>
    )
}