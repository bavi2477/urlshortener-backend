import Url from '../Models/Url.js';
import shortid from 'shortid';

export const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortCode = shortid.generate();

  try {
      const url = await Url.create({ originalUrl, shortCode});
      res.json({ shortUrl: `${req.headers.host}/api/url/${url.shortCode}` });

  } catch (error) {
      console.error('Error shortening URL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
  export const redirectUrl = async (req, res) => {
    const { shortCode } = req.params;
    try {
      const url = await Url.findOne({ shortCode });
      if (!url) {
        return res.status(404).json({ error: 'URL not found' });
      }
      url.clicks++;
      await url.save();
       res.redirect(url.originalUrl);
    } catch (error) {
      console.error('Error redirecting URL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
  };
  
  export const getStats = async (req, res) => {
    try {
      const stats = await Url.aggregate([
          {
              $group: {
                  _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                  count: { $sum: 1 },
              },
          },
          {
              $project: {
                  _id: 0, 
                  date: '$_id', 
                  count: 1
              }
          }
      ]);
      res.json(stats);
  } catch (error) {
      console.error('Error getting URL stats:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find({});
    res.json(urls); 
  } catch (error) {
    console.error('Error fetching URLs:', error);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
};
