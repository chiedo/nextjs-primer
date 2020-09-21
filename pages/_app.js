import {
  BaseStyles,
  BorderBox,
  Box,
  Dropdown,
  Flex,
  SideNav,
  Text,
  TextInput
} from '@primer/components'
import { MarkGithubIcon, SearchIcon } from '@primer/octicons-react'

const Sidebar = () => (
  <Box
    height="100vh"
    p={3}
    minWidth="300px"
    backgroundColor="blue.9"
    color="white"
  >
    <Flex alignItems="center" p={2}>
      <MarkGithubIcon aria-label="GitHub Logo" size="medium" />
      <Text pl={2} fontWeight="bold">
        GitHub Docs
      </Text>
    </Flex>
    <Box mt={4} ml={2}>
      <SideNav variant="lightweight" backgroundColor="blue.9">
        <SideNav.Link href="/en/github/getting-started-with-github" mb={2}>
          <Text color="blue.2" fontSize="12px">
            GETTING STARTED
          </Text>
        </SideNav.Link>
        <SideNav.Link
          href="/en/github/setting-up-and-managing-your-github-user-account"
          mb={2}
        >
          <Text color="blue.2" fontSize="12px">
            USER ACCOUNTS
          </Text>
        </SideNav.Link>
        <SideNav.Link
          href="/en/github/setting-up-and-managing-your-github-profile"
          mb={2}
        >
          <Text color="blue.2" fontSize="12px">
            PROFILES
          </Text>
        </SideNav.Link>
        <SideNav.Link href="/en/github/authenticating-to-github" mb={2}>
          <Text color="blue.2" fontSize="12px">
            AUTHENTICATION
          </Text>
        </SideNav.Link>
      </SideNav>
    </Box>
  </Box>
)

const Header = () => (
  <BorderBox borderWidth={0} borderBottomWidth={1} borderRadius={0} p={4}>
    <Flex justifyContent="flex-end">
      <Dropdown direction="w">
        <Dropdown.Button>English</Dropdown.Button>
        <Dropdown.Menu direction="sw" minWidth="300px">
          <Dropdown.Item>简体中文 (Simplified Chinese)</Dropdown.Item>
          <Dropdown.Item>日本語 (Japanese)</Dropdown.Item>
          <Dropdown.Item>Español (Spanish)</Dropdown.Item>
          <Dropdown.Item>Português do Brasil (Portuguese)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <TextInput
        ml={4}
        icon={SearchIcon}
        aria-label="Search topics, products..."
        name="search"
        placeholder="Search topics, products..."
        minWidth="200px"
      />
    </Flex>
  </BorderBox>
)

export default function App({ Component, pageProps }) {
  return (
    <BaseStyles>
      <Flex flexWrap="nowrap" height="100vh">
        <Sidebar />
        <Box overflow="scroll">
          <Header />
          <Box as="main" px={8} py={4}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Flex>
    </BaseStyles>
  )
}
