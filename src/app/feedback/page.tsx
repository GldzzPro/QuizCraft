import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import FormFeedBack from "@/components/client/fragments/FormFeedback";

export default function FeedbackPage() {
  return (
    <Card className="w-full max-w-xl mx-auto sm:mt-9">
      <CardHeader>
        <CardTitle>Form</CardTitle>
        <CardDescription>
          We value your input. Please share your thoughts with us.
        </CardDescription>
      </CardHeader>
      <CardContent>
    

        <FormFeedBack />
      </CardContent>
    </Card>
  );
}
