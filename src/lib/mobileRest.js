import ImageWebp1 from '$static/8.jpg?aspect=9:16&w=300;700;1100&format=webp&srcset';
import ImageWebp2 from '$static/9.jpg?aspect=9:16&w=300;700;1100&format=webp&srcset';
import ImageWebp3 from '$static/10.jpg?aspect=9:16&w=300;700;1100&format=webp&srcset';
import ImageWebp4 from '$static/0.jpg?aspect=9:16&w=300;700;1100&format=webp&srcset';
import ImageJpeg1 from '$static/8.jpg?aspect=9:16&w=300;700;1100&format=jpg&srcset';
import ImageJpeg2 from '$static/9.jpg?aspect=9:16&w=300;700;1100&format=jpg&srcset';
import ImageJpeg3 from '$static/10.jpg?aspect=9:16&w=300;700;1100&format=jpg&srcset';
import ImageJpeg4 from '$static/0.jpg?aspect=9:16&w=300;700;1100&format=jpg&srcset';

const srcsets = [{wset: ImageWebp1,jset: ImageJpeg1},
                 {wset: ImageWebp2,jset: ImageJpeg2},
                 {wset: ImageWebp3,jset: ImageJpeg3},
                 {wset: ImageWebp4,jset: ImageJpeg4}];

export { srcsets as default }; 