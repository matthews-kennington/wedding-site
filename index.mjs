import { getImages } from 'icloud-shared-album';
import { writeFileSync } from 'fs'

const data = await getImages('B0gGRMtznGc0eHY');

writeFileSync('./icloud.json', JSON.stringify(data));
