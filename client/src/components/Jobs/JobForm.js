import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function JobForm() {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    dateApplied: '',
    status: 'Applied', // Default status
    notes: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { company, role, dateApplied, status, notes } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      await axios.post('/api/jobs', formData, config);
      navigate('/dashboard'); // Redirect to dashboard after adding
    } catch (err) {
      setError(err.response.data.msg || 'Failed to add job application');
      console.error(err.response.data);
    }
  };

  return (
    <div className="job-form-container">
      <h2>Add New Job Application</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={role}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateApplied">Date Applied:</label>
          <input
            type="date"
            id="dateApplied"
            name="dateApplied"
            value={dateApplied}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={status} onChange={onChange}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
            <option value="Accepted">Accepted</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={notes}
            onChange={onChange}
          ></textarea>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Save Application</button>
        <button type="button" onClick={() => navigate('/dashboard')}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default JobForm;
