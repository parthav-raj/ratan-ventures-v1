import React, { useState, useEffect } from 'react'
import './IncidentForm.css'

export default function IncidentForm({ incident, onSubmit, onCancel }) {
    const isEditing = !!incident

    // Initialize form state
    const [formData, setFormData] = useState({
        short_description: '',
        description: '',
        state: '1',
        impact: '2',
    })

    // Load incident data if editing
    useEffect(() => {
        if (incident) {
            // Extract primitive values from potential objects
            const shortDesc =
                typeof incident.short_description === 'object'
                    ? incident.short_description.value
                    : incident.short_description
            const description =
                typeof incident.description === 'object' ? incident.description.value : incident.description
            const state = typeof incident.state === 'object' ? incident.state.value : incident.state
            const impact = typeof incident.impact === 'object' ? incident.impact.value : incident.impact

            setFormData({
                short_description: shortDesc || '',
                description: description || '',
                state: state || '1',
                impact: impact || '2',
            })
        }
    }, [incident])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="form-overlay">
            <div className="form-container">
                <div className="form-header">
                    <h2>{isEditing ? `Edit ${incident.number.display_value}` : 'Create New Incident'}</h2>
                    <button type="button" className="close-button" onClick={onCancel}>
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="short_description">Short Description *</label>
                        <input
                            type="text"
                            id="short_description"
                            name="short_description"
                            value={formData.short_description}
                            onChange={handleChange}
                            required
                            maxLength={160}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                            maxLength={4000}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <select id="state" name="state" value={formData.state} onChange={handleChange}>
                                <option value="1">New</option>
                                <option value="2">In Progress</option>
                                <option value="3">On Hold</option>
                                <option value="6">Resolved</option>
                                <option value="7">Closed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="impact">Impact</label>
                            <select id="impact" name="impact" value={formData.impact} onChange={handleChange}>
                                <option value="1">1 - High</option>
                                <option value="2">2 - Medium</option>
                                <option value="3">3 - Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            {isEditing ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
