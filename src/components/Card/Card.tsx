import {
  CardHeader,
  Card as ChakraCard,
  VStack,
  CardBody,
  CardFooter,
  Image,
  Button,
  Box,
  HStack,
  Avatar,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
function Card({ info }: { info: any }) {
  console.log(info);
  return (
    <ChakraCard
      sx={{ breakInside: "avoid" }}
      my="2"
      w={"max-content"}
      h="max-content"
    >
      <CardHeader padding={4}>
        <HStack>
          <Avatar name="Dan Abrahmov" src={info.picture.medium} />
          <Box display="flex" flexDirection="column" gap={0}>
            <Text fontWeight={"bold"}>{info.login.username}</Text>
            <Text>{info.dob.age}k followers</Text>
          </Box>
        </HStack>
      </CardHeader>
      <CardBody>
        <Image
          objectFit="contain"
          width={250}
          src={`https://picsum.photos/200/300?t=${Date.now()}`}
        />
      </CardBody>
      <CardFooter
        alignItems="center"
        display={"flex"}
        justifyContent="space-between"
      >
        <Text> {moment(new Date(info.registered.date)).fromNow()}</Text>
        <HStack>
          <Button size="sm" variant="ghost">
            <AiOutlineDownload />
          </Button>
          <Button size="sm" variant="ghost">
            <RiVideoAddFill />
          </Button>
          <Button size="sm" variant="ghost">
            <BsThreeDots />
          </Button>
        </HStack>
      </CardFooter>
    </ChakraCard>
  );
}

export default Card;
