import React from 'react';
import './App.css'; // Import the updated styling

// Sample JSON data
const countriesData = [
    {
        name: "Ireland",
        academic_reputation: {
            university_rankings: {
                QS_World_Ranking: "2 universities in the top 200",
                Times_Higher_Education: "3 universities in the top 300",
            },
            accreditation: "Internationally recognized qualifications",
        },
        cost_of_education: {
            tuition_fees: "€10,000 - €25,000 per year",
        },
        living_expenses: {
            cost_of_living: "€9,000 - €12,000 per year",
        },
    },
    {
        name: "UK",
        academic_reputation: {
            university_rankings: {
                QS_World_Ranking: "4 of the top 10",
                Times_Higher_Education: "3 of the top 10",
            },
            accreditation: "Global recognition and high standards",
        },
        cost_of_education: {
            tuition_fees: "£10,000 - £30,000 per year",
        },
        living_expenses: {
            cost_of_living: "£9,000 - £12,000 per year",
        },
    },
];

// Card component to display information for each country
function CountryCard({ country }) {
    return (
        <div className="card">
            <h2>{country.name}</h2>
            <div className="academic-reputation">
                <h3>Academic Reputation</h3>
                <p>
                    <strong>QS World Ranking:</strong> {country.academic_reputation.university_rankings.QS_World_Ranking}
                </p>
                <p>
                    <strong>Times Higher Education:</strong> {country.academic_reputation.university_rankings.Times_Higher_Education}
                </p>
                <p>
                    <strong>Accreditation:</strong> {country.academic_reputation.accreditation}
                </p>
            </div>
            <div className="education-expenses">
                <h3>Cost of Education</h3>
                <p>
                    <strong>Tuition Fees:</strong> {country.cost_of_education.tuition_fees}
                </p>
                <h3>Living Expenses</h3>
                <p>
                    <strong>Cost of Living:</strong> {country.living_expenses.cost_of_living}
                </p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Countries Information</h1>
            <div className="card-container">
                {countriesData.map((country, index) => (
                    <CountryCard key={index} country={country} />
                ))}
            </div>
        </div>
    );
}

export default App;
