import SignIn from "@/components/sign-in";
import SignUp from "@/components/sign-up";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <Tabs defaultValue="sign-in" className="w-full max-w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">로그인</TabsTrigger>
          <TabsTrigger value="sign-up">회원가입</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignIn />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
