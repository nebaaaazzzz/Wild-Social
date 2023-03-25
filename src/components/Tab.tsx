import {
  Box,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Checkbox,
  Tab as ChakraTab,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Select,
  HStack,
  Input,
  Text,
  VStack,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import Card from "./Card/Card";
import {
  BsStarFill,
  BsFillGrid1X2Fill,
  BsFillBarChartFill,
  BsFillCollectionFill,
} from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { Badge } from "@chakra-ui/react";
import data from "../data/MOCK_DATA";
import { useEffect, useState } from "react";
import CardSkeleton from "./Card/CardSkeleton";
function checkBoxListComponentBuilder(list: Array<string>): JSX.Element {
  return (
    <>
      {list.map((item, index) => {
        return (
          <MenuItem key={index} closeOnSelect={false} role={"checkbox"}>
            <Checkbox>{item}</Checkbox>
          </MenuItem>
        );
      })}
    </>
  );
}
let cat = [
  {
    title: "Post Type",
  },
  {
    title: "Community Member",
    component: (
      <MenuList>
        <VStack>
          <Input w={10 / 12} placeholder="Search community members" />
          {checkBoxListComponentBuilder(["a", "b", "h", "i"])}
        </VStack>
      </MenuList>
    ),
  },
  {
    title: "Source",
  },
  {
    title: "Tag",
  },
  {
    title: "Usage Right",
    component: (
      <MenuList>
        {checkBoxListComponentBuilder(["Pending", "Approved", "Rejected"])}
      </MenuList>
    ),
  },
  {
    title: "Followers",
    component: (
      <MenuList>
        <MenuItem
          _hover={{
            backgroundColor: "transparent",
          }}
          closeOnSelect={false}
        >
          <HStack justify={"space-between"}>
            <Select size={"sm"} placeholder="from">
              {[1, 5, 10, 15, 50, 100].map((item) => {
                return <option value="option1">{item}k</option>;
              })}
            </Select>
            <Select size={"sm"} placeholder="to">
              {[1, 5, 10, 15, 50, 100].map((item) => {
                return <option value="option1">{item}k</option>;
              })}
            </Select>
          </HStack>
        </MenuItem>
      </MenuList>
    ),
  },
  {
    title: "Content Type",
    component: (
      <MenuList>{checkBoxListComponentBuilder(["Video", "Audio"])}</MenuList>
    ),
  },
  {
    title: "Collection",
  },
  {
    title: "Created Date",
    component: (
      <MenuList>
        <MenuItem
          _hover={{
            backgroundColor: "transparent",
          }}
          closeOnSelect={false}
        >
          <HStack gap="1">
            <Input type="date" />
            <Input type="date" />
          </HStack>
        </MenuItem>
      </MenuList>
    ),
  },
  {
    title: "Verification",
    component: (
      <MenuList>
        {checkBoxListComponentBuilder(["Verified", "Not Vefified"])}
      </MenuList>
    ),
  },
];
const tabs = [
  {
    title: "All Content",
    Icon: BsFillGrid1X2Fill,
  },
  {
    title: "Favorites",
    Icon: BsStarFill,
  },
  {
    title: "Collections",
    Icon: BsFillCollectionFill,
  },
  // {
  //   title: "Integration(soon)",
  //   Icon: GiServerRack,
  // },
  // {
  //   title: "Report(soon)",
  //   Icon: BsFillBarChartFill,
  // },
];
function Tab() {
  return (
    <Tabs isLazy={false}>
      <HStack justify={"space-between"}>
        <TabList>
          {tabs.map(({ title, Icon }) => {
            return (
              <ChakraTab>
                <Wrap gap="1">
                  <Icon />
                  <Text>{title}</Text>
                </Wrap>
              </ChakraTab>
            );
          })}
        </TabList>
        <HStack>
          <Button fontWeight={"normal"} as="a" variant="ghost">
            What's new?{" "}
            <Badge variant={"solid"} ml="1" rounded="full" colorScheme={"red"}>
              3
            </Badge>
          </Button>
          <FiSettings />
        </HStack>
      </HStack>
      <TabPanels>
        <AllContent />
        <Favorites />
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
function Favorites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontWeight={"light"}>New Collection</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="collection name" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TabPanel>
        <VStack mt="40" justifyContent={"center"}>
          <Text fontSize="2xl">You Haven't created any Collections Yet</Text>
          <Text>create collection to organize your content</Text>
          <Button bg={"green.300"} onClick={onOpen} color="white">
            New Collection
          </Button>
        </VStack>
      </TabPanel>
    </>
  );
}
function AllContent() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any>();
  useEffect(() => {
    (async () => {
      fetch(`https://randomuser.me/api/?results=100`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setLoading(false);
          setUsers(res.results);
        });
    })();
  }, []);
  return (
    <TabPanel>
      <Box mb="5">
        {cat.map(({ title, component }) => {
          return (
            <Menu size={"1"}>
              <MenuButton
                bg="white"
                size="xs"
                py="4"
                fontSize={"sm"}
                fontWeight={500}
                borderRadius={"none"}
                variant="outline"
                as={Button}
                rightIcon={<IoMdArrowDropdown />}
              >
                {title}
              </MenuButton>
              {component}
            </Menu>
          );
        })}
      </Box>

      <Box mx="auto" sx={{ columnCount: [1, 2, 3, 4], columnGap: "45px" }}>
        {loading &&
          Array(30)
            .fill(0)
            .map((user, i) => {
              return <CardSkeleton i={i} />;
            })}
        {!loading &&
          users &&
          users?.map((user: any, i: number) => {
            return <Card key={user.login.uuid} info={user} />;
          })}
      </Box>
    </TabPanel>
  );
}

export default Tab;
