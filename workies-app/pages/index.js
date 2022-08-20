import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SelectWalletModal from "../components/WalletConnectModal";

import { Box, Flex, Img, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box>
            <Flex alignContent={"center"}>
                <Img
                    objectFit="cover"
                    src="/assets/logo3.png"
                    alt="Workies"
                />
            </Flex>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <a href="#" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </a>
                    <a href="#" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </a>
                    <a href="#" className={styles.card}>
                        <h2>Examples &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </a>
                    <a href="#" className={styles.card}>
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                Powered by <Text>Workies</Text>
            </footer>
        </Box>
    );
}
