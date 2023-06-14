import {z} from 'zod';
import iconListEntrySchema from '../utils/iconListEntrySchema';

export type IconListEntry = z.infer<typeof iconListEntrySchema>;
