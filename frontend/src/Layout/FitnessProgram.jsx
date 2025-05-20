import React from 'react';

const programs = [
  {
    user: 'Sarah.exe',
    age: '34y',
    freq: '4d/week',
    level: 'BEGINNER',
    goal: 'Weight Loss',
    plan: 'Beginner Weight Loss Program',
    gym: 'Home gym',
    nutrition: 'Balanced Nutrition Plan (Lactose-Free)',
    description: 'This program focuses on building a consistent exercise habit with joint-friendly movements that protect your lower back.',
  },
  {
    user: 'Michael.exe',
    age: '28y',
    freq: '5d/week',
    level: 'INTERMEDIATE',
    goal: 'Muscle Gain',
    plan: 'Hypertrophy-Focused Muscle Building',
    gym: 'Full gym',
    nutrition: 'Muscle Building Nutrition Plan',
    description: 'This program implements a traditional body-part split with emphasis on progressive overload. Each muscle group is trained...',
  },
  {
    user: 'Elena.exe',
    age: '45y',
    freq: '3d/week',
    level: 'INTERMEDIATE',
    goal: 'General Fitness',
    plan: 'Functional Fitness Program',
    gym: 'Bodyweight only',
    nutrition: 'Balanced Vegetarian Nutrition',
    description: 'This program focuses on functional movement patterns that improve everyday performance while being gentle on the knees...',
  },
];

const FitnessPrograms = () => {
  return (
    <div className="container py-5 text-light">
      <div className="text-center mb-4">
        <h2>AI-Generated <span className="text-info">Programs</span></h2>
        <p>Explore personalized fitness plans our AI assistant has created for other users</p>
        <div className="d-flex justify-content-center gap-5 mt-3">
          <div><strong>500+</strong><br />PROGRAMS</div>
          <div><strong>3 min</strong><br />CREATION TIME</div>
          <div><strong>100%</strong><br />PERSONALIZED</div>
        </div>
      </div>

      <div className="row">
        {programs.map((p, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card bg-secondary h-100 text-white">
              <div className="card-body">
                <h6 className="text-info">USER.{i + 1} - {p.level}</h6>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={`https://via.placeholder.com/40`}
                    alt="avatar"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <strong>{p.user}</strong><br />
                    <small>{p.age} · {p.freq}</small>
                  </div>
                </div>
                <p className="badge bg-info">{p.goal}</p>
                <ul className="list-unstyled mt-3">
                  <li><strong>{p.plan}</strong><br /><small>{p.gym}</small></li>
                  <li className="mt-2"><strong>{p.nutrition}</strong><br /><small>System optimized nutrition</small></li>
                  <li className="mt-2"><strong>AI Safety Protocols</strong><br /><small>Protection systems enabled</small></li>
                </ul>
                <p className="mt-3 text-muted small">{p.description}</p>
                <button className="btn btn-info w-100 mt-2">View Program Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessPrograms;
