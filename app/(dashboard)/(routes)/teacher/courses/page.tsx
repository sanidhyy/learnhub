import Link from "next/link";

import { Button } from "@/components/ui/button";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Button>
        <Link href="/teacher/create">New Course</Link>
      </Button>
    </div>
  );
};

export default CoursesPage;
