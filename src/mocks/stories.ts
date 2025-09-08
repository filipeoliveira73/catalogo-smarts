
// Itens para o Stories
interface Story {
  id: number;
  icon: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: 1,
    icon: '/list.svg',
    description: 'Selecionados',
  },
  {
    id: 2,
    icon: '/prices.svg',
    description: 'Mais vendidos',
  },
  {
    id: 3,
    icon: '/moeda.svg',
    description: 'Ofertas',
  },
  {
    id: 4,
    icon: '/word.svg',
    description: 'Novidades',
  },
  {
    id: 5,
    icon: '/engeny.svg',
    description: 'Eletrônicos',
  },
  {
    id: 6,
    icon: '/robo.svg',
    description: 'Tecnologia',
  },
];
