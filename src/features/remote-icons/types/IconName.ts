import {z} from 'zod';
import iconNameSchema from '../utils/iconNameSchema';

export type IconName = z.infer<typeof iconNameSchema>;
