import {z} from 'zod';

const iconNameSchema = z.enum(['bad', 'deno', 'stag']);

export default iconNameSchema;
