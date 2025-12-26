/**
 * ModelsList Component
 *
 * Displays analytical models related to a specific entity (e.g., a risk).
 * Models are separate MDX documents with their own analysis.
 */

import React from 'react';
import { getModelsForEntity } from '../../data';
import { FileBarChart, ArrowRight } from 'lucide-react';

interface ModelsListProps {
  entityId: string;
  title?: string;
  showEmpty?: boolean;
}

export function ModelsList({
  entityId,
  title = 'Analytical Models',
  showEmpty = false,
}: ModelsListProps) {
  const models = getModelsForEntity(entityId);

  if (models.length === 0 && !showEmpty) {
    return null;
  }

  return (
    <div className="models-list">
      <h3 className="models-list__title">
        <FileBarChart className="models-list__icon" size={18} />
        {title}
      </h3>

      {models.length === 0 ? (
        <p className="models-list__empty">No models available for this topic yet.</p>
      ) : (
        <>
          <p className="models-list__intro">
            The following analytical models provide structured frameworks for understanding this risk:
          </p>
          <div className="models-list__grid">
            {models.map((model) => {
              // Get model type from customFields
              const modelType = model.customFields?.find(f => f.label === 'Model Type')?.value;

              return (
                <a key={model.id} href={model.href} className="models-list__card">
                  <div className="models-list__card-header">
                    <span className="models-list__card-title">{model.title}</span>
                    <ArrowRight className="models-list__card-arrow" size={16} />
                  </div>
                  {modelType && (
                    <span className="models-list__card-type">{modelType}</span>
                  )}
                  {model.description && (
                    <p className="models-list__card-desc">{model.description}</p>
                  )}
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default ModelsList;
