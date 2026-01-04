import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar, ChevronRight } from "lucide-react";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <Card
      className="bg-gray-900 border-gray-700 hover:border-red-600 transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105"
      onClick={() => onViewDetails(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <ChevronRight className="w-8 h-8 mx-auto mb-2" />
            <span className="text-sm font-medium">View Details</span>
          </div>
        </div>
        {project.highlighted && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-red-600 text-white">Highlighted</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-800 text-gray-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge
              variant="secondary"
              className="bg-gray-800 text-gray-300 text-xs"
            >
              +{project.technologies.length - 5} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          {project.demoUrl && (
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.demoUrl, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, "_blank");
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {project.summaryUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.summaryUrl, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Summary
            </Button>
          )}
          {project.sampleUrl && (
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.sampleUrl, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Sample code
            </Button>
          )}
          {project.linkUrl && (
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white flex-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.linkUrl, "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Link
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
