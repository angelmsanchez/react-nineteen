import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import EpisodesPage from '../../warriors/pages/episodes/EpisodesPage';

const HomePage = lazy(() => import('../../home/pages/index/Home'));
const EpisodeDetailPage = lazy(
  () => import('../../warriors/pages/detail/EpisodeDetailPage'),
);

export function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route
          path="/episodes/detail/:idWarrior"
          element={<EpisodeDetailPage />}
        />
      </Routes>
    </Suspense>
  );
}
