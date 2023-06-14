import {z} from 'zod';
import iconNameSchema from './iconNameSchema';

const iconListEntrySchema = z.object({name: iconNameSchema, url: z.string()});

export default iconListEntrySchema;
