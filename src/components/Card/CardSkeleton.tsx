import React from "react";
import {
  CardFooter,
  CardHeader,
  HStack,
  Skeleton,
  Card,
  CardBody,
  SkeletonCircle,
  VStack,
  Wrap,
} from "@chakra-ui/react";
function CardSkeleton({ i }: { i: number }) {
  return (
    <Card
      sx={{ breakInside: "avoid" }}
      my="2"
      w={"max-content"}
      h="max-content"
    >
      <CardHeader display={"flex"} gap={"10"}>
        <SkeletonCircle size="10" />
        <VStack alignItems={"start"}>
          <Skeleton borderRadius={"md"} height="20px" width={150} />
          <Skeleton borderRadius={"md"} height="20px" width={70} />
        </VStack>
      </CardHeader>
      <CardBody>
        <Skeleton height={`${i % 2 == 0 ? "50px" : "200px"} `} />
      </CardBody>
      <CardFooter display={"flex"} justifyContent="space-between">
        <Skeleton borderRadius={"md"} height="20px" width={70} />
        <HStack>
          <SkeletonCircle size="4" />
          <SkeletonCircle size="4" />
          <SkeletonCircle size="4" />
        </HStack>
      </CardFooter>
    </Card>
  );
}

export default CardSkeleton;
