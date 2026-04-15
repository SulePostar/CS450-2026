import { GOOGLE_API_KEY, LATITUDE, LONGITUDE, SIZE, ZOOM } from '../config/map.js';

export const getMapPreview = async (lat = LATITUDE, lng = LONGITUDE) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${ZOOM}&size=${SIZE}&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}