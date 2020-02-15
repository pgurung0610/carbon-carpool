import React from 'react';
import Post from './Post'
import UsersInfoService from '../../../service/UsersInfoService';

class Feed extends React.Component {
    state = {
        posts: [
            {
                id: 1,
                ride_provider: 'John Smith',
                ride_getter: 'Holly Jones'
            },
            {
                id: 2,
                ride_provider: 'John Smith',
                ride_getter: 'Holly Jones'
            },
            {
                id: 3,
                ride_provider: 'John Smith',
                ride_getter: 'Holly Jones'
            }
        ]
    };

    constructor(props) {
        super(props)
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UsersInfoService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    console.log(response.data);
                }
            )
    }

    render() {
        return (
            <div className="Feed">
                {/* <ul className="posts">
                    {this.state.posts.map( post => (
                        <Post key={post.id} post={post} />
                    ))}
                </ul> */}
            </div>
          );
    }
}

export default Feed;