import { Product } from "./product";
export const PRODUCTS: Product[] = [
  {
      id: '0',
      name: 'Pedigree  x 8kg',
      image: '/assets/images/pedigree.jpg',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'Proteínas del alta calidad y lisina para fortalecer los músculos y los órganos vitales, optimización del uso de energía y calcio, prebióticos que facilitan el proceso de absorción de nutrientes!',
      comments: [
          {
              rating: 5,
              comment: 'Imagine all the eatables, living in conFusion!',
              author: 'John Lemon',
              date: '2012-10-16T17:57:28.556094Z'
          },
          {
              rating: 4,
              comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
              author: 'Paul McVites',
              date: '2014-09-05T17:57:28.556094Z'
          },
          {
              rating: 3,
              comment: 'Eat it, just eat it!',
              author: 'Michael Jaikishan',
              date: '2015-02-13T17:57:28.556094Z'
          },
          {
              rating: 4,
              comment: 'Ultimate, Reaching for the stars!',
              author: 'Ringo Starry',
              date: '2013-12-02T17:57:28.556094Z'
          },
          {
              rating: 2,
              comment: 'It\'s your birthday, we\'re gonna party!',
              author: '25 Cent',
              date: '2011-12-02T17:57:28.556094Z'
          }
      ]
  },
  {
      id: '1',
      name: 'Nutre Can',
      image: '/assets/images/nutrecan.jpg',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Mejorar las articulaciones, el aspecto del pelo y mejora la fortaleza de las uñas. Su fórmula esta diseñada para dar una nutrición completa gracias a sus niveles de proteínas buenas.',
      comments: [

          {
              rating: 2,
              comment: 'It\'s your birthday, we\'re gonna party!',
              author: '25 Cent',
              date: '2011-12-02T17:57:28.556094Z'
          }
      ]
  },
  {
      id: '2',
      name: 'vitality',
      image: '/assets/images/vitality.jpg',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
      comments: [
          {
              rating: 5,
              comment: 'Imagine all the eatables, living in conFusion!',
              author: 'John Lemon',
              date: '2012-10-16T17:57:28.556094Z'
          },
          {
              rating: 4,
              comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
              author: 'Paul McVites',
              date: '2014-09-05T17:57:28.556094Z'
          },
          {
              rating: 3,
              comment: 'Eat it, just eat it!',
              author: 'Michael Jaikishan',
              date: '2015-02-13T17:57:28.556094Z'
          },
          {
              rating: 4,
              comment: 'Ultimate, Reaching for the stars!',
              author: 'Ringo Starry',
              date: '2013-12-02T17:57:28.556094Z'
          },
          {
              rating: 2,
              comment: 'It\'s your birthday, we\'re gonna party!',
              author: '25 Cent',
              date: '2011-12-02T17:57:28.556094Z'
          }
      ]
  },
  {
      id: '3',
      name: 'Whole Barf',
      image: '/assets/images/Barf.jpeg',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      comments: [
          {
              rating: 5,
              comment: 'Imagine all the eatables, living in conFusion!',
              author: 'John Lemon',
              date: '2012-10-16T17:57:28.556094Z'
          },
          {
              rating: 4,
              comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
              author: 'Paul McVites',
              date: '2014-09-05T17:57:28.556094Z'
          },
          {
              rating: 3,
              comment: 'Eat it, just eat it!',
              author: 'Michael Jaikishan',
              date: '2015-02-13T17:57:28.556094Z'
          },
          {
              rating: 4,
              comment: 'Ultimate, Reaching for the stars!',
              author: 'Ringo Starry',
              date: '2013-12-02T17:57:28.556094Z'
          },
          {
              rating: 2,
              comment: 'It\'s your birthday, we\'re gonna party!',
              author: '25 Cent',
              date: '2011-12-02T17:57:28.556094Z'
          }
      ]
  }
];


