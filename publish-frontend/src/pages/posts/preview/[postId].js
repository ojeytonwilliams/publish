import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getArticle } from '@/lib/articles';

export default function PreviewArticlePage() {
  // declare state variables
  const [article, setArticle] = useState(null);

  // Get the articleId from the dynamic segment in the URL
  const router = useRouter();
  const { articleId } = router.query;

  useEffect(() => {
    // Fetch the article data from the server using the articleId
    const fetchArticle = async () => {
      try {
        const data = await getArticle(articleId);
        console.log('GET response: ', data);
        setArticle(data.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  // loading screen
  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>Preview</div>
      {/* TODO: Article preview page */}
      <div>
        <h1>{article.attributes?.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: article.attributes?.body }}
        ></div>
      </div>
    </>
  );
}
