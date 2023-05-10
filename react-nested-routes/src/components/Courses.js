import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
return (
	<div className="Page">
	<h3>You are in the Courses page!</h3>
	<h6>URL: localhost:3000/courses</h6>
	<div className="courses-nav">
		<Link to="/courses/search">Search</Link>
		<Link to="/courses/list">List</Link>
	</div>
	<Outlet />
	</div>
)
}

export default Courses
