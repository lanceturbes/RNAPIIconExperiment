import {z} from 'zod';
import iconListEntrySchema from './iconListEntrySchema';

const iconListSchema = z.array(iconListEntrySchema);

export default iconListSchema;
