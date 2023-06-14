import {z} from 'zod';
import iconListSchema from '../utils/iconListSchema';

export type IconList = z.infer<typeof iconListSchema>;
