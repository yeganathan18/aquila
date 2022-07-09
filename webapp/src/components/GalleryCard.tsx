import Image from 'next/image';

import Link from './Link';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    CardMedia,
  } from "@mui/material";
    import { Button } from "@mui/material";

const GalleryCard = ({ title, description, imgSrc, href }) => (
    <Card className="py-5 mx-2 my-6 w-96 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
    {href ? (
            <Link
                href={href}
                aria-label={`Link to ${title}`}
                >
    <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt={title}
      />
            </Link>
      ) : (
        <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt={title}
      />
        )}
    <CardContent className="text-center">
    {href && (
            <Link
                href={href}
                aria-label={`Link to ${title}`}
                >
      <Typography variant="h5" className="mb-2">
        {title}
      </Typography>
      </Link>
        )}
      <Typography>
        {description}
      </Typography>
    </CardContent>
    <CardActions className="flex items-center justify-between py-3">
        {href && (
            <Link
                href={href}
                aria-label={`Link to ${title}`}
                >
      <Button size="small" color="primary">
          Learn more
        </Button>
        </Link>
        )}
    </CardActions>
  </Card>
);
export default GalleryCard;