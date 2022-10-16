import ImageWebp1 from '$static/4.jpg?aspect=4:3&w=300;700;1100&format=webp&srcset';
import ImageWebp2 from '$static/5.jpg?aspect=4:3&w=300;700;1100&format=webp&srcset';
import ImageWebp3 from '$static/6.jpg?aspect=4:3&w=300;700;1100&format=webp&srcset';
import ImageWebp4 from '$static/7.jpg?aspect=4:3&w=300;700;1100&format=webp&srcset';
import ImageJpeg1 from '$static/4.jpg?aspect=4:3&w=300;700;1100&format=jpg&srcset';
import ImageJpeg2 from '$static/5.jpg?aspect=4:3&w=300;700;1100&format=jpg&srcset';
import ImageJpeg3 from '$static/6.jpg?aspect=4:3&w=300;700;1100&format=jpg&srcset';
import ImageJpeg4 from '$static/7.jpg?aspect=4:3&w=300;700;1100&format=jpg&srcset';

const srcsets = [{wset: ImageWebp1,jset: ImageJpeg1},
                 {wset: ImageWebp2,jset: ImageJpeg2},
                 {wset: ImageWebp3,jset: ImageJpeg3},
                 {wset: ImageWebp4,jset: ImageJpeg4}];

export { srcsets as default }; 