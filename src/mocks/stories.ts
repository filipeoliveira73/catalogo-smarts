
// Itens para o Stories
interface Story {
  id: number;
  icon: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: 1,
    icon: '/icons8-casa.svg',
    description: 'Para casa',
  },
  {
    id: 2,
    icon: '/icons8-para-voce.svg',
    description: 'Para você',
  },
  {
    id: 3,
    icon: '/icons8-cursor-da-mao.svg',
    description: 'Selecionados',
  },
  {
    id: 4,
    icon: '/icons8-marcador.svg',
    description: 'Livros',
  },
];
