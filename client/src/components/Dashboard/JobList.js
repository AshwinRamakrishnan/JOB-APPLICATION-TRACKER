import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token, // Send JWT token for authentication
          },
        };
        const res = await axios.get('/api/jobs', config);
        setJobs(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="job-list-container">
      <h2>Job Applications</h2>
      <Link to="/add-job" className="btn btn-primary">
        + Add New Job
      </Link>
      {jobs.length === 0 ? (
        <p>No job applications found. Add one!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job.company}</td>
                <td>{job.role}</td>
                <td>{new Date(job.dateApplied).toLocaleDateString()}</td>
                <td>{job.status}</td>
                <td>
                  <Link to={`/job/${job._id}`}>View</Link> |{' '}
                  <Link to={`/edit-job/${job._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default JobList;
