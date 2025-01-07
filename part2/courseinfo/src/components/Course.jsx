const Header = ({ course }) => {
  console.log(course.name);

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  console.log(name, exercises);
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const Content = ({ course }) => {
  const courseParts = course.parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));

  console.log("courseParts", courseParts);

  return <div>{courseParts}</div>;
};

const Total = ({ course }) => {
  const sumExercises = course.parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  console.log(sumExercises);

  return (
    <div>
      <p>total of {sumExercises} exercises</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
