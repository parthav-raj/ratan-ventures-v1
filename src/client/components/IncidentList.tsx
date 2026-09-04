import React from 'react'
import './IncidentList.css'

export default function IncidentList({ incidents, onEdit, onRefresh, service }) {
    const handleDelete = async (incident) => {
        if (!confirm(`Are you sure you want to delete ${incident.number.display_value}?`)) {
            return
        }

        try {
            const sysId = typeof incident.sys_id === 'object' ? incident.sys_id.value : incident.sys_id
            await service.delete(sysId)
            onRefresh()
        } catch (error) {
            console.error('Failed to delete incident:', error)
            alert('Failed to delete incident: ' + (error.message || 'Unknown error'))
        }
    }

    const getStateClass = (state) => {
        const stateValue = typeof state === 'object' ? state.display_value : state

        switch (stateValue) {
            case 'New':
                return 'state-new'
            case 'In Progress':
                return 'state-in-progress'
            case 'On Hold':
                return 'state-on-hold'
            case 'Resolved':
                return 'state-resolved'
            case 'Closed':
                return 'state-closed'
            default:
                return ''
        }
    }

    const getImpactClass = (impact) => {
        const impactValue = typeof impact === 'object' ? impact.value : impact

        switch (impactValue) {
            case '1':
                return 'impact-high'
            case '2':
                return 'impact-medium'
            case '3':
                return 'impact-low'
            default:
                return ''
        }
    }

    return (
        <div className="incident-list">
            {incidents.length === 0 ? (
                <div className="no-incidents">No incidents found</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Description</th>
                            <th>State</th>
                            <th>Impact</th>
                            <th>Opened</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incidents.map((incident) => {
                            // Extract primitive values from potential objects
                            const number =
                                typeof incident.number === 'object' ? incident.number.display_value : incident.number
                            const shortDesc =
                                typeof incident.short_description === 'object'
                                    ? incident.short_description.display_value
                                    : incident.short_description
                            const state =
                                typeof incident.state === 'object' ? incident.state.display_value : incident.state
                            const impact =
                                typeof incident.impact === 'object' ? incident.impact.display_value : incident.impact
                            const openedAt =
                                typeof incident.opened_at === 'object'
                                    ? incident.opened_at.display_value
                                    : incident.opened_at

                            return (
                                <tr key={typeof incident.sys_id === 'object' ? incident.sys_id.value : incident.sys_id}>
                                    <td>{number}</td>
                                    <td>{shortDesc}</td>
                                    <td>
                                        <span className={`state-badge ${getStateClass(incident.state)}`}>{state}</span>
                                    </td>
                                    <td>
                                        <span className={`impact-badge ${getImpactClass(incident.impact)}`}>
                                            {impact}
                                        </span>
                                    </td>
                                    <td>{openedAt}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="edit-button"
                                                onClick={() => onEdit(incident)}
                                                aria-label={`Edit incident ${number}`}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="delete-button"
                                                onClick={() => handleDelete(incident)}
                                                aria-label={`Delete incident ${number}`}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}
