"use client"
import React from 'react'
import useIsAuth from '../useIsAuth';
import { Button } from '@/components/ui/button';

const ButtonQuizPath = ({id}:{id: string}) => {
    const { handlePath, isLoading } = useIsAuth({ currentPath:"/quiz", id });
    return (
        <Button onClick={handlePath} variant={"default"}>
        {isLoading ? "Loading..." : "Start Quiz"}
      </Button>
    )
}

export default ButtonQuizPath