import React from "react";
import { certifications } from "../data/data";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Award, BookOpen } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-red-600">Courses</span> & Certifications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A collection of certifications and courses that strengthened my
            technical foundation and problem-solving skills.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 group hover:shadow-lg hover:shadow-red-900/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-600/10 p-2 rounded-xl">
                      <BookOpen className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.year}
                  </div> */}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 5).map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}

                {cert.linkUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1 w-full"
                    onClick={() => window.open(cert.linkUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                )}

                {cert.courseUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1 w-full"
                    onClick={() => window.open(cert.courseUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Curriculum
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <h4 className="text-xl font-bold text-white mt-16 mb-6 flex items-center">
          <span className="w-1 h-6 bg-red-600 mr-3"></span>
          Awards & Recognition
        </h4>

        <div className="space-y-4">
          <Card className="bg-gray-900 border-gray-800 p-6 hover:border-red-600 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white flex items-center mb-1">
              <Award className="w-5 h-5 text-red-500 mr-2" />
              Game Changer Award
            </h4>
            <p className="text-gray-400 text-sm">
              Recognized by{" "}
              <span className="text-red-500 font-medium">
                Dell Technologies
              </span>{" "}
              (2023) for innovation and measurable business impact in the
              Voice-of-Customer-as-a-Service platform initiative.
            </p>
          </Card>

          <Card className="bg-gray-900 border-gray-800 p-6 hover:border-red-600 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white flex items-center mb-1">
              <Award className="w-5 h-5 text-red-500 mr-2" />
              AIR 61 – National Creativity Aptitude Test
            </h4>
            <p className="text-gray-400 text-sm">
              Achieved All-India Rank 61 (2021) for excellence in creative
              reasoning and analytical problem-solving.
            </p>
          </Card>

          <Card className="bg-gray-900 border-gray-800 p-6 hover:border-red-600 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white flex items-center mb-1">
              <Award className="w-5 h-5 text-red-500 mr-2" />
              1st Runner-Up – CryptHunt 2020
            </h4>
            <p className="text-gray-400 text-sm">
              Secured 2nd place among 40 teams in a nationwide cryptography and
              logic-based hack event.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
