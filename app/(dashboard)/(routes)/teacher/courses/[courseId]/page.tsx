const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  return <div>Course ID: {params.courseId}</div>;
};

export default CourseIdPage;
