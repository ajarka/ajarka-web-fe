import {
  Stack,
  Container,
  Text,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const data = [
  {
    tanya: "Apa itu Ajarka?",
    jawab:
      "Ajarka adalah sebuah less komputer dan coding pribadi yang terpercaya dengan keahlian di berbagai lini teknologi dan perkodingan.",
  },
  {
    tanya: "Apa yang membedakan Ajarka dengan yang lain?",
    jawab:
      "Tentu saja dari segi layanan yang ditawarkan, di Ajarka sangat mengutamakan mentor yang mempunyai keahlian dalam halnya perkodingan. Tak hanya itu saja, di Ajarka lebih mengutamakan kepuasan siswa yang mendaftar dalam halnya perhitungan biaya yang dikenakan oleh masing-masing mentor.",
  },
  {
    tanya:
      "Apakah Ajarka membuka kesempatan bagi seseorang untuk menjadi mentor?",
    jawab:
      "Untuk saat ini iya. Anda bisa mendaftarkan diri anda sebagai mentor di Ajarka dengan cara memencet tombol “Cara Mendaftar” di halaman utama ini.",
  },
  {
    tanya: "Kursus apa saja yang tersedia di Ajarka?",
    jawab:
      "Kursus yang tersedia sampai saat ini bergantung pada mentor yang kami miliki. Untuk saat terdapat berbagai kursus seperti Kursus Java, Kursus HTML, Kursus CSS, Kursus React, dan masing banyak lagi. Disini kami membagi dalam sebuah modul seperti Frontend, Backend, Android Developer, dan lain-lain.",
  },
  {
    tanya: "Siapa saja yang boleh mendaftar sebagai siswa di Ajarka?",
    jawab:
      "Kami menargetkan mereka yang sudah SMA/SMK, Sarjana/Diploma, dan Lulusan Dari Perguruang Tinggi. Namun tidak menutup kemungkinan, siapapun bisa mendaftar di Ajarka.",
  },
];

export default function FAQ() {
  const AccordionContainer = (props) => (
    <AccordionItem border="0">
      <AccordionButton px={0} _hover={{ bg: "none" }}>
        <Box flex="1" textAlign="left">
          {props.tanya}
        </Box>
        <AccordionIcon ml={5} />
      </AccordionButton>
      <AccordionPanel pb={4} px={0}>
        <Text color={"gray.500"} align="justify">
          {props.jawab}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );

  return (
    <Stack
      as={Container}
      mt={20}
      mb={6}
      maxW={"7xl"}
      align="center"
      justifyContent="center"
      minH={{ base: "auto", lg: "70vh" }}
      data-aos="fade-up"
    >
      <Stack
        p={{ base: 5, lg: 10 }}
        bg={useColorModeValue("gray.100", "gray.900")}
        rounded="xl"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 10 }}
      >
        <Stack flex={1}>
          <Stack>
            <Text
              color={useColorModeValue("accentLight.500", "accentDark.500")}
            >
              Support
            </Text>
            <Heading as="h2">FAQ</Heading>
            <Text fontSize={"md"} color={"gray.500"} align="justify">
              Segala pertanyaan yang kerap ditanyakan kepada kami, kami rangkum
              di dalam komponen FAQ, agar mempermudah pekerjaan tim kami dan
              menambah pemahaman anda tentang Platform Ajarka ini.
            </Text>
          </Stack>
        </Stack>
        <Stack flex={1}>
          <Accordion allowToggle w="full">
            {data.map((item, index) => (
              <AccordionContainer key={index} {...item} />
            ))}
          </Accordion>
        </Stack>
      </Stack>
    </Stack>
  );
}
