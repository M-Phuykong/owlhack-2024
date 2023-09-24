import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import asads2 from '../assets/images/asads2.png';
import bagel from '../assets/images/bagel.jpg';
import cheesesteak from '../assets/images/cheesesteak.jpg';
import hoagie from '../assets/images/hoagie.png';
import pretzel from '../assets/images/pretzel.jpg';
import waterice from '../assets/images/waterice.jpg';

const PRIMARY_COL_HEIGHT = rem(300);


export function Subgrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <img height={PRIMARY_COL_HEIGHT} src={pretzel} alt="cheesesteak" />
        <Grid gutter="md">
          <Grid.Col>
            <img height={SECONDARY_COL_HEIGHT} src={cheesesteak} alt="cheesesteak" />
          </Grid.Col>

          <Grid.Col span={6}>
            <img height={SECONDARY_COL_HEIGHT} src={hoagie} alt="pretzel" />
          </Grid.Col>

          <Grid.Col span={6}>
            <img height={SECONDARY_COL_HEIGHT} src={waterice} alt="waterice" />
          </Grid.Col>

        </Grid>
      </SimpleGrid>
    </Container>
  );
}