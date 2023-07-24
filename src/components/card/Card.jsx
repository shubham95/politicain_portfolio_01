import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Image,
  Stack,
  Container,
  CardFooter,
  Button
} from '@chakra-ui/react';

export default function MyCard({img, text}) {
  return (
    <Container maxW="6xl">
      <Card>
      <CardBody>
        <div
          style={{
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            position: 'relative',
          }}
        >
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            objectFit="cover"
            position="absolute"
            width="100%"
            height="100%"
          />
        </div>
        <Stack mt="6" spacing="3">
          <Heading size="md">{text}</Heading>
          <Text>{text}</Text>
        </Stack>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            क्लिक करें
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
