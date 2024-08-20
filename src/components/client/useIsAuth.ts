import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useToast } from '../ui/use-toast';

const useIsAuth = ({quizId}:{quizId: string}) => {
    const {toast} = useToast();
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false)
    const handlePath = () => {
      setIsLoading(true)
      if (status === "unauthenticated" || !session) {
        signIn();
        toast({
          title: "Please login to continue",
          variant: "default",
        });
        setIsLoading(false)
      }
  
      if (status === "authenticated") {
        router.push(`/quiz/${quizId}`);
        setIsLoading(false)
      }
      setIsLoading(false)
    };
    return {
        handlePath,
        isLoading
    }
}

export default useIsAuth;