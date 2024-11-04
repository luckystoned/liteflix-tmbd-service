import * as dotenv from 'dotenv';

dotenv.config();

interface EnvironmentConfiguration {
  tmdbApiKey: string;
  tmdbBaseURL: string;
  tmdbLanguage: string;
}

const { TMDB_API_KEY, TMDB_BASE_URL, TMDB_LANGUAGE } = process.env;

const envConfig = (): EnvironmentConfiguration => ({
  tmdbApiKey: TMDB_API_KEY,
  tmdbBaseURL: TMDB_BASE_URL,
  tmdbLanguage: TMDB_LANGUAGE,
});

export default envConfig;
