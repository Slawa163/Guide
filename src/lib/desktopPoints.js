import ImageWebp1 from '$static/1.jpg?aspect=16:9&w=300;700;1100&format=webp&srcset';
import ImageWebp2 from '$static/2.jpg?aspect=16:9&w=300;700;1100&format=webp&srcset';
import ImageWebp3 from '$static/3.jpg?aspect=16:9&w=300;700;1100&format=webp&srcset';
import ImageJpeg1 from '$static/1.jpg?aspect=16:9&w=300;700;1100&format=jpg&srcset';
import ImageJpeg2 from '$static/2.jpg?aspect=16:9&w=300;700;1100&format=jpg&srcset';
import ImageJpeg3 from '$static/3.jpg?aspect=16:9&w=300;700;1100&format=jpg&srcset';

const srcsets = [{wset: ImageWebp1,jset: ImageJpeg1},
                 {wset: ImageWebp2,jset: ImageJpeg2},
                 {wset: ImageWebp3,jset: ImageJpeg3}];

export { srcsets as default }; 