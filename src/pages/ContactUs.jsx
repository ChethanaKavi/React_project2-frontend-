import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess('');
        } else {
            setErrors({});
            setSuccess('Form submitted successfully!');

        }
    };

    return (
        <div>
            <h1 style={{ fontSize: '2em', color: 'green', fontFamily: 'Ink Free ' }}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block' }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    {errors.name && <p style={{ color: 'red', marginTop: '0.5rem' }}>{errors.name}</p>}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    {errors.email && <p style={{ color: 'red', marginTop: '0.5rem' }}>{errors.email}</p>}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block' }}>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    {errors.message && <p style={{ color: 'red', marginTop: '0.5rem' }}>{errors.message}</p>}
                </div>
                <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#FFD700', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
                {success && <p style={{ color: 'green', marginTop: '0.5rem' }}>{success}</p>}
            </form>
        </div>
    );
};

export default ContactUs;
