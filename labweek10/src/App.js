import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="email" />

        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="fullName" />

        <label>Address Line 1:</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} className="address1" />

        <label>Address Line 2:</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="address2" />

        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} className="city" />

        <label>Province:</label>
        <select name="province" value={formData.province} onChange={handleChange} className="province">
          <option value="">Choose...</option>
          <option value="Ontario">Ontario</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
        </select>

        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="postalCode" />

        <div className="checkbox-label">
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
          <label>Agree Terms & Conditions?</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
        <h2>Submitted Data:</h2>
        <p><span className="label">Email:</span> {submittedData.email}</p>
        <p><span className="label">Full Name:</span> {submittedData.fullName}</p>
        <p><span className="label">Address:</span> {submittedData.address1}, {submittedData.address2}</p>
        <p><span className="label">City:</span> {submittedData.city}</p>
        <p><span className="label">Province:</span> {submittedData.province}</p>
        <p><span className="label">Postal Code:</span> {submittedData.postalCode}</p>
      </div>
      )}
    </div>
  );
}

export default App;
